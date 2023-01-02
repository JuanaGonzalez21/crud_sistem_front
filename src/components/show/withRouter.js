import React from 'react';
import { useParams } from 'react-router-dom';
import ComponentToPrint from './ComponentToPrint'
 
const withRouter = WrappedComponent => props => {
  const params = useParams();
 
  return (
    <WrappedComponent
      {...props}
      params={params}
    />
  );
};
 
export default withRouter;