import React from "react";
import Skeleton from "../components/Skeleton/Skeleton";

function withSkeleton(Component, type, count) {
  return function WithSkeleton(props) {
    const { isLoading, ...restProps } = props;

    console.log(isLoading);

    if (isLoading) {
      return <Skeleton type={type} count={count} />;
    }

    return <Component {...restProps} />;
  };
}

export default withSkeleton;