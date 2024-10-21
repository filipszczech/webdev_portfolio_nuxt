<template>
    <div class='relative z-10 max-w-7xl mx-auto bg-gray-100 dark:bg-gray-400 text-gray-800 border-2 border-gray-700 dark:text-gray-700'>
        <form @submit="onSubmit" class='relative z-20 bg-gray-100 dark:bg-gray-400 grid grid-cols-2 gap-6 md:gap-9 p-6 md:p-9'>
            <div class="col-span-2">
                <p>Mam nadzieję, że mój profil Ci się spodobał! :)</p>
                <p>Jeśli tak, zapraszam do kontaktu.</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="email" placeholder="Email *" v-model="email" v-bind="emailAttrs" class="w-full bg-transparent p-3" />
                <p class="absolute -bottom-6 left-0">{{ errors.email }}</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="text" placeholder="Imię *" v-model="name" v-bind="nameAttrs" class="w-full bg-transparent p-3" />
                <p class="absolute -bottom-6 left-0">{{ errors.name }}</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="text" placeholder="Nazwa firmy" v-model="company" v-bind="companyAttrs" class="w-full bg-transparent p-3" />
                <p class="absolute -bottom-6 left-0">{{ errors.company }}</p>
            </div>
            <div class="relative col-span-2 bg-transparent">
                <textarea placeholder="wiadomość *" v-model="message" v-bind="messageAttrs" class="w-full bg-transparent min-h-24 p-3 border border-gray-700"></textarea>
                <p class="absolute -bottom-5 left-0">{{ errors.message }}</p>
            </div>
            <div class='relative bg-[#596ae8] text-white border border-black z-20 w-32'>
                <button class='bg-[#596ae8] py-2 w-full'>Wyślij</button>
                <div class='absolute bg-gray-700 w-full h-full left-[0.35rem] top-[0.35rem] -z-20'></div>
            </div>
        </form>
        <div
            class="absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
        </div>
        </div>
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    const mail = useMail();
    const { addToast } = useToast();

    const { errors, handleSubmit, resetForm, defineField, setFieldValue } = useForm({
        initialValues: {
            name: '',
            email: '',
            company: '',
            message: '',
        },
        validationSchema: yup.object().shape({
            email: yup.string().email('Wprowadź poprawny email.').required('Uzupełnij adres email.'),
            name: yup.string().required('Uzupełnij imię.'),
            company: yup.string().notRequired(),
            message: yup.string().min(6, 'Wiadomość jest za krótka.').required('Wprowadź tekst wiadomości.'),
        }),
    });

    const onSubmit = handleSubmit(async (values) => {
        try {
            mail.send({
                from: values.email,
                subject: `Webdev portfolio - wiadomość od ${values.email}.`,
                text: `
                    Imię i nazwisko: ${values.name}
                    Email: ${values.email}
                    Nazwa firmy: ${values.company ? values.company : '-'}
                    Treść wiadomości: ${values.message ? values.message : '-'}
                `,
            });
            resetForm();
            addToast('Wiadomość została wysłana. Dziękuję za kontakt! :)', 5000);
        } catch (error) {
            console.error('Błąd podczas wysyłania wiadomości:', error);
        }
    });

    const [email, emailAttrs] = defineField('email');
    const [name, nameAttrs] = defineField('name');
    const [company, companyAttrs] = defineField('company');
    const [message, messageAttrs] = defineField('message');
</script>