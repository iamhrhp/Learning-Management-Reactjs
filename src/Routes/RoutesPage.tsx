import { Component } from 'react';
import LandingPages from '../components/LandingPages/LandingPages';

interface RoutesPageProps {}

interface RoutesPageState {}

class RoutesPage extends Component<RoutesPageProps, RoutesPageState> {
  constructor(props: RoutesPageProps) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <LandingPages />
        {/* Customer-------------  */}
        {/* Seller-------------  */}
      </>
    );
  }
}

export default RoutesPage;
