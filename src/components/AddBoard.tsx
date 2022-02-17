import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "../atoms";

const AddSpace = styled.div`
  max-width: 200px;
  height: 300px;
  background-color: #2980b9;
  border-radius: 10px;
  display: flex;
  margin-left: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  h2 {
    text-align: center;
    font-size: 18px;
    font-weight: 600;
    padding: 10px 10px;
  }
  button {
    flex-grow: 1;
    border: none;
    cursor: pointer;
    font-size: 50px;
    background-color: #2980b9;
    border-radius: 10px;
  }
  span {
    margin-top: 2px;
    margin-left: 2px;
    color: #b71540;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0 0 5px black;
  }
`;

interface IForm {
  board: string;
}

function AddBoard() {
  const setToDos = useSetRecoilState(toDoState);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const onValid = ({ board }: IForm) => {
    setToDos((allBoards) => {
      return { ...allBoards, [board[0].toUpperCase() + board.slice(1)]: [] };
    });
    setValue("board", "");
  };
  return (
    <AddSpace>
      <Form onSubmit={handleSubmit(onValid)}>
        <h2>보드 생성</h2>
        <input
          {...register("board", {
            required: "작성해주세요",
            pattern: {
              value: /^[^0-9].*/,
              message: "숫자가 먼저 오면 안됩니다.",
            },
          })}
          type="text"
          placeholder="보드 이름 작성"
        />
        <span>{errors.board?.message}</span>
        <button>➕</button>
      </Form>
    </AddSpace>
  );
}
export default AddBoard;
