import useProfileTheme from "hooks/useProfileTheme";

const useActions = () => {
  const { theme, setTheme } = useProfileTheme();

  return { theme, setTheme };
};

export default useActions;
