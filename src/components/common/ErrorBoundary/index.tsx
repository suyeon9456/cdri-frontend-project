import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
  onReset?: () => void;
  fallbackRender?: ({ error, reset }: { error: Error | null; reset: () => void }) => ReactNode;
};

type State = {
  hasError: boolean;
  error: Error | null;
};

export class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error:', error, errorInfo);
  }

  resetErrorBoundary = () => {
    this.setState({ hasError: false, error: null });
    this.props.onReset?.();
  };

  render() {
    const { hasError, error } = this.state;

    if (hasError) {
      const reset = this.resetErrorBoundary;
      const fallbackRender = this.props.fallbackRender;
      if (fallbackRender != null) return fallbackRender({ error, reset });
      return (
        this.props.fallback ?? (
          <div style={{ color: 'red', padding: '1rem' }}>
            <h2>{error?.message}</h2>
          </div>
        )
      );
    }

    return this.props.children;
  }
}
