import React from 'react';
import LandingBanner from './Banner/LandingBanner';

interface LandingPageProps {}

interface LandingPageState {}

class LandingPages extends React.Component<LandingPageProps, LandingPageState> {
  constructor(props: LandingPageProps) {
    super(props);
  }
  render() {
    return (
      <>
        <LandingBanner />
      </>
    );
  }
}

export default LandingPages;
