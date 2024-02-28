import { IPaginationProps } from "../../interfaces/index";
import Pagination from "../Pagination/Pagination";

interface Props {
  top?: boolean;
  bottom?: boolean;
  children: React.ReactNode;
}

const PaginationWrapper = ({
  top,
  bottom,
  children,
  ...paginationProps
}: Props & IPaginationProps) => {
  return (
    <>
      {top && <Pagination {...paginationProps} />}
      {children}
      {bottom && <Pagination {...paginationProps} />}
    </>
  );
};

export default PaginationWrapper;
