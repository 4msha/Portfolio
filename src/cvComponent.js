import React from "react";
import { ReactComponent as Decor } from "./assets/khi.svg";

export const BriefComponent = () => {
  return (
    <div className="brief  mt-5">
      <div className="container  pt-5 mt-3">
        <h3>Hola peeps!.</h3>
        <h6 className="w-50 ml-auto mr-auto">
          CODING!CODING!CODING! My first Love. It brings tremendous joy to me,
          when i code, my cheeks get puffed ,tinted pink as by coding there is a
          sheer joy of making things. The fascination of fashioning complex
          puzzle and watching them work in cycles makes me lost into another
          dimension. From #include.stdio.h to svd((repmat
          (sum(x*x,1),size(x,1),1).*x)*x'); my world revolves.
        </h6>
        <Decor className="h-25 w-75" />
      </div>
    </div>
  );
};
