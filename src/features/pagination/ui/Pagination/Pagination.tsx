import { IPaginationProps, PaginationButtons } from "../..";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const Pagination = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <PaginationButtons {...paginationProps} />}
      {children}
      {bottom && <PaginationButtons {...paginationProps} />}
    </>
  );
};

export default Pagination;
