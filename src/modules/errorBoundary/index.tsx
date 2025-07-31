// import React from "react";

// export class ErrorBoundary extends React.Component {
//   state = { hasError: false, error: null };

//   static getDerivedStateFromError(error: any) {
//     // Update state so the next render will show the fallback UI.
//     return { hasError: true, error };
//   }

//   componentDidCatch(error, errorInfo) {
//     // You can also log the error to an error reporting service
//     // logErrorToMyService(error, errorInfo);
//     console.log(error, errorInfo);
//   }

//   render() {
//     if (this.state.hasError) {
//       // You can render any custom fallback UI
//       return <h1>Something went wrong.</h1>;
//     }

//     return <></>;
//   }
// }

import React from "react";

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};
