import { Component } from 'react';
import Courses from '../components/LandingPages/Courses/Courses';
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
        <Courses/>
        {/* Customer-------------  */}
        {/* Seller-------------  */}
      </>
    );
  }
}

export default RoutesPage;
