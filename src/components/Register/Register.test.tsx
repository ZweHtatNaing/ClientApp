import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Register from './Register';

describe('Register', () => {
  let props;
  let shallowRegister;
  let renderedRegister;
  let mountedRegister;

  const shallowTestComponent = () => {
    if (!shallowRegister) {
      shallowRegister = shallow(<Register {...props} />);
    }
    return shallowRegister;
  };

  const renderTestComponent = () => {
    if (!renderedRegister) {
      renderedRegister = render(<Register {...props} />);
    }
    return renderedRegister;
  };

  const mountTestComponent = () => {
    if (!mountedRegister) {
      mountedRegister = mount(<Register {...props} />);
    }
    return mountedRegister;
  };  

  beforeEach(() => {
    props = {};
    shallowRegister = undefined;
    renderedRegister = undefined;
    mountedRegister = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
