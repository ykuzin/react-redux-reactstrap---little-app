import React, { Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { Spinner, Container } from "reactstrap";
// import "./App.scss"

import store from "./redux/store";
import Post from "./Components/Post";
import PageHeader from "./Components/PageHeader";
import Footer from "./Components/Footer";

const SignUp = React.lazy(() => import("./Components/SignUp"));
const PostsPage = React.lazy(() => import("./Components/Posts"));
const Redactor = React.lazy(() => import("./Components/Redactor"));

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PageHeader />
        <Container>
          <Switch>
            <Suspense fallback={<Spinner />}>
              <Route exact path="/" component={PostsPage} />
              <Route exact path="/post/:id" component={Post} />
              <Route exact path="/create" component={Redactor} />
              <Route exact path="/register" component={SignUp} />
            </Suspense>
          </Switch>
        </Container>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}
