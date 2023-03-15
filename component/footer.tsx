// const signupForm = document.querySelector(".main__label");
// const textInput = document.getElementById("todo");
// const handleAddNewUser = (e) => {
//   e.preventDefault();
//   const add = textInput.value;
//   const newEntry = (
//     <tr>
//       <td>${add}</td>
//     </tr>
//   );
//   table.innerHTML += newEntry;
//   signupForm.reset;
// };
// signupForm.addEventListener("submit", handleAddNewUser);
const Footer = () => {
  return (
    <footer>
      <label htmlFor="todo">
        <input
          placeholder="Add todo"
          className="bg-[#F3F3F3] p-2 w-60 rounded-lg"
        />
      </label>
    </footer>
  );
};

export default Footer;
