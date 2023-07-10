declare namespace Util {
  type SetStateType<T> = import('react').Dispatch<
    import('react').SetStateAction<T>
  >;
}
