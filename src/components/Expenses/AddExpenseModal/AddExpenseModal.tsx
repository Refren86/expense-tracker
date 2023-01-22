import { ChangeEvent, FC, useState } from 'react';
import { useDispatch } from 'react-redux';

import { Dropdown } from '../../Dropdown';
import { FormInput } from '../../FormInput';
import { SimpleAnimatedModal } from '../../SimpleAnimatedModal';
import { TCurrency, TExpense, TOption } from '../../../types';

import { AddExpenseModalContainer } from '../../Expense/Expense.styles';
import { Button } from '../../Button';

export type TAddExpenseModalProps = {
  isOpened: boolean;
  onClose: () => void;
};

export type TAddExpenseForm = Pick<
  TExpense,
  'description' | 'amount' | 'currency'
>;

const defaultFormFields: TAddExpenseForm = {
  description: '',
  amount: 0,
  currency: 'UAH',
};

const currenciesSelect: TOption[] = [
  {
    value: 'UAH',
    label: 'Hryvnia',
  },
  {
    value: 'USD',
    label: 'Dollar',
  },
  {
    value: 'EUR',
    label: 'Euro',
  },
];

export const AddExpenseModal: FC<TAddExpenseModalProps> = ({
  isOpened,
  onClose,
}) => {
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState(defaultFormFields);

  const { description, amount } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fieldName = event.target.name;
    const fieldValue = event.target.value;

    setFormFields(prevState => ({ ...prevState, [fieldName]: fieldValue }))
  }

  const onCurrencySelect = (value: any) => {
    setFormFields((prevState) => ({ ...prevState, currency: value }));
  };

  return (
    <SimpleAnimatedModal opened={isOpened} onClose={onClose}>
      <AddExpenseModalContainer>
        <h3>Add Expense</h3>

        <form style={{ width: '100%' }}>
          <FormInput
            type="text"
            label="Description"
            name="description"
            value={description}
            onChange={handleChange}
            required
          />

          <div
            style={{ display: 'flex', alignItems: 'center', columnGap: '1rem' }}
          >
            <FormInput
              type="number"
              label="Amount"
              name="amount"
              value={amount.toString()}
              onChange={handleChange}
              required
            />

            <Dropdown
              title="Currency"
              options={currenciesSelect}
              onSelect={onCurrencySelect}
            />
          </div>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginTop: '2rem',
            }}
          >
            <Button type="submit">Add expense</Button>
          </div>
        </form>
      </AddExpenseModalContainer>
    </SimpleAnimatedModal>
  );
};
