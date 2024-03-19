import { NextRouter, withRouter } from "next/router";

interface MovieDetailPageProps {
    id: number;
    router: NextRouter;
  }
  
  const MovieDetailPage = ({ id, router }: MovieDetailPageProps) => { 
    return (
      <span>Page de détail de id {id}</span>
    );
  };
  
  MovieDetailPage.getInitialProps = async () => {
    return { id: null };
  };
  
  export default withRouter(MovieDetailPage);