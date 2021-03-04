import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import CheckoutList from '../CheckoutList';

describe('<CheckoutList />', () => {
  let getByTestId;
  let item = { text: 'test', isChecked: false };
  let items = [item];
  let checkHandler;

  afterEach(cleanup);

  beforeEach(() => {
    checkHandler = jest.fn();
  });

  it('checkbox check/uncheck', () => {
    ({ getByTestId } = render(
      <CheckoutList data={items} onCheck={checkHandler} />,
    ));

    fireEvent.click(getByTestId('checkBtn'));
    expect(getByTestId('checkBtn').checked).toEqual(true);
    expect(checkHandler).toHaveBeenCalledWith(item);

    fireEvent.click(getByTestId('checkBtn'));
    expect(getByTestId('checkBtn').checked).toEqual(false);
    expect(checkHandler).toHaveBeenCalledWith(item);
  });
});
