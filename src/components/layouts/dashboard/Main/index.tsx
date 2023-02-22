import { FC } from "react";
interface IMain {
  children: React.ReactNode;
}

const Main: FC<IMain> = ({ children }) => {
  return (
    <main className="col-lg-9 col-md-11 col-12 my-4 p-0 m-0">
      <div className="container">{children}</div>
    </main>
  );
};

export default Main;
