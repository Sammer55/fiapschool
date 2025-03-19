import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from 'react';
import { UserProps } from '../types/user';
import StudentSwitch from '../components/StudentSwitch';

type Student = UserProps['alunos'][0];

interface StudentContextType {
  selectedStudent: Student | null;
  setSelectedStudent: (student: Student | null) => void;
  isStudentSwitchVisible: boolean;
  setIsStudentSwitchVisible: Dispatch<SetStateAction<boolean>>;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

interface DateProviderProps {
  children: ReactNode;
}

export const StudentProvider = ({ children }: DateProviderProps) => {
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [isStudentSwitchVisible, setIsStudentSwitchVisible] =
    useState<boolean>(false);

  return (
    <StudentContext.Provider
      value={{
        selectedStudent,
        setSelectedStudent,
        isStudentSwitchVisible,
        setIsStudentSwitchVisible,
      }}>
      {children}

      <StudentSwitch
        isVisible={isStudentSwitchVisible}
        handleClose={() => setIsStudentSwitchVisible(false)}
      />
    </StudentContext.Provider>
  );
};

export const useStudent = (): StudentContextType => {
  const context = useContext(StudentContext);

  if (!context) {
    throw new Error('useStudent must be used within a StudentProvider');
  }

  return context;
};
