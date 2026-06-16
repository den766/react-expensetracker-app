
import { useState } from "react";
function UserConfirmationModel(){

       
      const [selectedExpenseId, setSelectedExpenseId] = useState(null);

      function openModal(id) {

           setSelectedExpenseId(id)
      }

      function closeModal() {
        setSelectedExpenseId(null);
    }

      return {

          selectedExpenseId,
          openModal,
          closeModal
      }
}

export default UserConfirmationModel;