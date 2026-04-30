import { Component, type ReactNode } from 'react'

type IntroErrorBoundaryProps = {
  children: ReactNode
  fallback: ReactNode
}

type IntroErrorBoundaryState = {
  hasError: boolean
}

export class IntroErrorBoundary extends Component<IntroErrorBoundaryProps, IntroErrorBoundaryState> {
  state: IntroErrorBoundaryState = {
    hasError: false,
  }

  static getDerivedStateFromError(): IntroErrorBoundaryState {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback
    }

    return this.props.children
  }
}
