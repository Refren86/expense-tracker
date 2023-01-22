
import { SimpleAnimatedModal } from '../../SimpleAnimatedModal';
import { AddExpenseModalContainer } from '../../Expense/Expense.styles';
import { FC } from 'react';

type TAddExpenseModalProps = {
  isOpened: boolean;
  onClose: () => void;
};

export const AddExpenseModal: FC<TAddExpenseModalProps> = ({ isOpened, onClose }) => {
  return (
    <SimpleAnimatedModal
      opened={isOpened}
      onClose={onClose}
    >
      <AddExpenseModalContainer>
        <h3>Add Expense</h3>

        <form>
          <input />
        </form>
      </AddExpenseModalContainer>
    </SimpleAnimatedModal>
  );
};