"use client";

import React, {
  ChangeEventHandler,
  ReactNode,
  SubmitEventHandler,
  useState,
} from "react";
import BoxRoundedWrapper from "./BoxRoundedWrapper";
import Header from "./Header";

type Props = { children: ReactNode };

const ListLayout = ({ children }: Props) => {
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleFileSearch: SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(searchQuery);
  };

  const handleFieldChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchQuery(e?.target.value);
    console.log(e.target.value);
  };

  return (
    <BoxRoundedWrapper additionalStyle="w-full px-8 py-8 flex flex-col gap-12">
      <Header
        handleFieldChange={handleFieldChange}
        handleSearch={handleFileSearch}
        query={searchQuery}
      />
      {children}
    </BoxRoundedWrapper>
  );
};

export default ListLayout;
