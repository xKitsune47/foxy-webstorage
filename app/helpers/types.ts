interface File {
  id: number;
  fileName: string;
  format: string;
  size: number;
  shared: boolean;
  date: Date | number;
}

type ButtonTypes = "destroy" | "confirm" | "acknowledge";

type PopupTypes = "delete" | "share" | "details" | "name";

interface PopupFunctions {
  close: () => void;
  delete: () => void;
  share: () => void;
  details: () => void;
  name: () => void;
}

export type { File, ButtonTypes, PopupTypes, PopupFunctions };
