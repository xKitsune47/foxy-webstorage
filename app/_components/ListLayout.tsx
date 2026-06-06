"use client";

import React, {
  ChangeEventHandler,
  ReactNode,
  SubmitEventHandler,
} from "react";
import BoxRoundedWrapper from "./BoxRoundedWrapper";
import Header from "./Header";

type Props = {
  children: ReactNode;
  headerFieldChange: ChangeEventHandler<HTMLInputElement>;
  headerFileSearch: SubmitEventHandler<HTMLFormElement>;
  searchQuery: string;
};

const ListLayout = ({
  children,
  headerFieldChange,
  headerFileSearch,
  searchQuery,
}: Props) => {
  return (
    <BoxRoundedWrapper
      additionalStyle="max-w-full px-8 py-8 lg:gap-12 gap-4 flex-1 min-h-0"
      dynamic={false}>
      <Header
        handleFieldChange={headerFieldChange}
        handleSearch={headerFileSearch}
        query={searchQuery}
      />
      {children}
    </BoxRoundedWrapper>
  );
};

export default ListLayout;
