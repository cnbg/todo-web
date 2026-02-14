interface Messages {
    [key: string]: {
        ru: string
        en: string
    }
}

const messages: Messages = {
    homepage: {
        ru: 'Главная страница',
        en: 'Homepage',
    },
    page_not_found: {
        ru: 'Страница не найдена',
        en: 'Page not found',
    },
    login: {
        ru: 'Войти',
        en: 'Login',
    },
    enter_your_pin: {
        ru: 'Введите ваш пин',
        en: 'Enter your pin',
    },
    enter_your_email: {
        ru: 'Введите вашу э-почту',
        en: 'Enter your email',
    },
    check_pin_validity: {
        ru: 'Проверьте пин',
        en: 'Check pin validity',
    },
    enter_your_password: {
        ru: 'Введите ваш пароль',
        en: 'Enter your password',
    },
    server_not_responding: {
        ru: 'Сервер не отвечает',
        en: 'Server is not responding',
    },
    try_again: {
        ru: 'Попробуйте снова',
        en: 'Try again',
    },
    password_length_min: {
        ru: 'Пароль должен быть не менее 6 символов',
        en: 'Password must be at least 6 characters',
    },
    error: {
        ru: 'Ошибка',
        en: 'Error',
    },
    email: {
        ru: 'Э-почта',
        en: 'Email',
    },
    password: {
        ru: 'Пароль',
        en: 'Password',
    },
    pin: {
        ru: 'Пин',
        en: 'Pin',
    },
    username: {
        ru: 'Имя пользователя',
        en: 'Username',
    },
    logout: {
        ru: 'Выйти',
        en: 'Logout',
    },
    profile: {
        ru: 'Профиль',
        en: 'Profile',
    },
    settings: {
        ru: 'Настройки',
        en: 'Settings',
    },
    language: {
        ru: 'Язык',
        en: 'Language',
    },
    name: {
        ru: 'Ваше имя',
        en: 'Name',
    },
    not_found: {
        ru: 'Не найдено',
        en: 'Not Found',
    },
    are_you_sure: {
        ru: 'Вы уверены?',
        en: 'Are you sure?',
    },
    dont_have_access: {
        ru: 'У вас нет доступа',
        en: 'You don\'t have access',
    },
    no_data: {
        ru: 'Нет данных',
        en: 'No data',
    },
    theme: {
        ru: 'Тема',
        en: 'Theme',
    },
    dark: {
        ru: 'Темная',
        en: 'Dark',
    },
    light: {
        ru: 'Светлая',
        en: 'Light',
    },
    error_during_login: {
        ru: 'Произошла ошибка при входе',
        en: 'An error occurred during login',
    },
    enter_valid_email: {
        ru: 'Введите корректную э-почту',
        en: 'Enter a valid email',
    },
    password_length_error: {
        ru: 'Пароль должен быть не менее 6 символов',
        en: 'Password must be at least 6 characters',
    },
    error_fetching_data: {
        ru: 'Произошла ошибка при получении данных',
        en: 'An error occurred while fetching data',
    },
    error_saving_data: {
        ru: 'Произошла ошибка при сохранении данных',
        en: 'An error occurred while saving data',
    },
    invalid_username_or_password: {
        ru: 'Неверное имя пользователя или пароль',
        en: 'Invalid username or password',
    },
    organizations: {
        ru: 'Организации',
        en: 'Organizations',
    },
    organization: {
        ru: 'Организация',
        en: 'Organization',
    },
    roles: {
        ru: 'Роли',
        en: 'Roles',
    },
    role: {
        ru: 'Роль',
        en: 'Role',
    },
}

export default messages
