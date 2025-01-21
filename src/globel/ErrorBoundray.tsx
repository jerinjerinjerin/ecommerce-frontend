import { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundryprops {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundry extends Component<ErrorBoundryprops, ErrorBoundryState> {
  constructor(props: ErrorBoundryprops) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("Error in ErrorBoundry:", error, errorInfo);
  }

  render(){
    if(this.state.hasError){
        return this.props.fallback || <h1>Something went wrong</h1>
    }

    return this.props.children;
  }
}

export default ErrorBoundry;