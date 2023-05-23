import React from "react";
import useTitle from "../../useTitle";

const Blogs = () => {
  useTitle("Blogs");
  return (
    <div className="py-10">
      <h1 className="text-4xl text-center font-bold">Blogs</h1>
      <div className="py-6 ">
        <h1 className="text-3xl font-semibold p-2 border-l-4 border-pink-600">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h1>
        <p className="text-xl font-light pl-4 py-2">
          <span className="font-semibold">An access token</span> is a credential
          that is used to access protected resources or perform actions on
          behalf of a user or an application. It is usually issued by an
          authentication server (such as OAuth) after a successful
          authentication process. The access token contains information about
          the user or application it represents, along with an expiration time.
          It is commonly sent with each API request as proof of authentication
          and authorization.
          <span className="font-semibold">A refresh token</span> is a long-lived
          credential that is used to obtain a new access token when the current
          access token expires. It is typically issued alongside the access
          token by the authentication server during the initial authentication
          process. The refresh token is securely stored on the client-side and
          should be kept confidential, as it allows obtaining new access tokens
          without further user interaction.
          <span className="font-semibold">Storage on the Client-side</span>
          Access Token: Store securely in memory or local storage . Refresh
          Token: Store securely in a protected storage with encryption or
          obfuscation.
        </p>
      </div>
      <div className="py-6 ">
        <h1 className="text-3xl font-semibold p-2 border-l-4 border-pink-600">
          Comparesion between SQL and NoSQL databases.
        </h1>
        <p className="text-xl font-light pl-4 py-2">
          <span className="font-semibold">SQL Databases</span>
          Structured data with predefined schema tables with rows and columns.
          Enforce data integrity rules through constraints. Use standardized SQL
          language for queries. Relational model with complex relationships and
          joins. ACID transactions for data integrity. Efficient for structured
          data but may face scalability challenges.
          <span className="font-semibold">NoSQL Databases</span>
          Flexible schema or schema-less approach. Support various data models
          (key-value, document, column-family, graph). Highly scalable for
          handling large volumes and high traffic. Prioritize performance over
          complex querying. Eventual consistency model. Well-suited for certain
          use cases and scalability needs.
        </p>
      </div>
      <div className="py-6 ">
        <h1 className="text-3xl font-semibold p-2 border-l-4 border-pink-600">
          What is express js? What is Nest JS ?
        </h1>
        <p className="text-xl font-light pl-4 py-2">
          Express.js and Nest.js are both popular web application frameworks for
          Node.js, but they differ in terms of design philosophy and features.
          <span className="font-semibold">Express.js</span> is a minimalistic
          and unopinionated web framework for Node.js. It provides a simple,
          flexible, and lightweight foundation for building web applications and
          APIs. Express.js allows developers to handle HTTP requests, define
          routes, and implement middleware functions easily. It follows a
          "do-it-yourself" approach, giving developers freedom and control over
          the application's structure and components.Express.js is highly
          customizable, allowing developers to choose and integrate additional
          libraries as needed.
          <span className="font-semibold">Nest.js</span> is a full-featured,
          opinionated web framework for building scalable and maintainable
          applications. It is built on top of Express.js and utilizes TypeScript
          as its primary language. Nest.js embraces the concept of modular
          architecture, encouraging developers to organize the codebase into
          reusable modules. It provides a powerful dependency injection system
          that promotes modularity, testability, and code reusability. Nest.js
          offers a comprehensive set of features and abstractions, including
          decorators, controllers, services, modules, and middleware. It also
          integrates well with modern frontend frameworks like Angular, sharing
          similar concepts and decorators.
        </p>
      </div>
      <div className="py-6 ">
        <h1 className="text-3xl font-semibold p-2 border-l-4 border-pink-600">
          What is MongoDB aggregate and the way it works.
        </h1>
        <p className="text-xl font-light pl-4 py-2">
          <span className="font-semibold">MongoDB's</span> aggregate is a method
          that helps you analyze and manipulate data in MongoDB collections. It
          works by applying a sequence of operations called stages to your data.
          We provide an array of stages to the aggregate method. Each stage
          performs a specific task on the data and passes the results to the
          next stage. This allows us to perform complex transformations and
          computations in a single query. Stages can filter data, group it based
          on certain criteria, calculate aggregations, sort the results, and
          more. We can chain multiple stages together to create a pipeline of
          operations. By using the aggregate method, We can perform advanced
          data analysis and get the desired output in a concise and efficient
          way. It's a powerful tool for working with data in MongoDB.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
