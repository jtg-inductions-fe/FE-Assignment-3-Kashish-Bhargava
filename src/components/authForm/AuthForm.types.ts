export interface AuthFormProps<T extends object> {
    /* "login" or "signup" to switch field sets */
    mode: 'login' | 'signup';

    /* Callback triggered when the form is submitted */
    onSubmit: (data: T) => void | Promise<void>;

    /* Whether form is submitting/loading */
    isLoading?: boolean;
}
