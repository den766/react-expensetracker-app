
import { useState } from "react";
function UseConfirmationModel(){

       
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

export default UseConfirmationModel;