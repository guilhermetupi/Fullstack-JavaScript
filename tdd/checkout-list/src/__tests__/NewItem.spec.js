import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import NewItem from '../NewItem';

describe('<NewItem />', () => {
  let getByTestId;
  let sendHandler;

  afterEach(cleanup);

  beforeEach(() => {
    sendHandler = jest.fn();
    ({ getByTestId } = render(<NewItem onSend={sendHandler} />)),
      fireEvent.change(getByTestId('itemText'), {
        target: {
          value: 'Test item',
        },
      });

    fireEvent.click(getByTestId('sendBtn'));
  });

  it('clears the text field', () => {
    expect(getByTestId('itemText').value).toEqual('');
  });

  it('calls the send handler', () => {
    expect(sendHandler).toHaveBeenCalledWith('Test item');
  });
});
