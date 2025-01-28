<template>
    <div ref="motionTarget">
        <h2 class="section-title">{{ $t('section_titles.contact') }}</h2>
        <div class='relative z-10 max-w-7xl mx-auto text-gray-800 dark:text-gray-700'>
        <form 
            @mouseover="isFormHovered = true" 
            @mouseleave="isFormHovered = false" 
            @submit="onSubmit" 
            class='relative z-20 bg-gray-100 dark:bg-gray-400 border-2 border-gray-700 grid grid-cols-2 gap-6 md:gap-9 p-6 md:p-9 md:text-lg transition-transform duration-300 ease-in-out transform md:hover:-translate-y-2 md:hover:-translate-x-2'>
            <div class="col-span-2">
                <p>{{ $t('contact.p1') }}</p>
                <p>{{ $t('contact.p2') }}</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="email" placeholder="Email *" v-model="email" v-bind="emailAttrs" class="w-full bg-transparent p-3 dark:placeholder-gray-700" />
                <p class="absolute -bottom-6 lg:-bottom-7 left-0">{{ errors.email }}</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="text" :placeholder="$t('contact.form_name')" v-model="name" v-bind="nameAttrs" class="w-full bg-transparent p-3 dark:placeholder-gray-700" />
                <p class="absolute -bottom-6 lg:-bottom-7 left-0">{{ errors.name }}</p>
            </div>
            <div class="col-span-2 md:col-span-1 relative bg-transparent border border-gray-700">
                <input type="text" :placeholder="$t('contact.form_company')" v-model="company" v-bind="companyAttrs" class="w-full bg-transparent p-3 dark:placeholder-gray-700" />
                <p class="absolute -bottom-6 lg:-bottom-7 left-0">{{ errors.company }}</p>
            </div>
            <div class="relative col-span-2 bg-transparent">
                <textarea :placeholder="$t('contact.form_message')" v-model="message" v-bind="messageAttrs" class="w-full bg-transparent min-h-24 p-3 border border-gray-700 dark:placeholder-gray-700"></textarea>
                <p class="absolute -bottom-4 lg:-bottom-5 left-0">{{ errors.message }}</p>
            </div>
            <AnimatedButton :text="$t('contact.form_send')" />
        </form>
        <div
            :class="{ 'md:translate-y-2 md:translate-x-2': isFormHovered }"
            class="absolute w-full h-full top-3 left-3 bg-gray-700 z-0 transition-transform duration-300 ease-in-out">
        </div>
        </div>
    </div>
    
</template>

<script setup>
    import { useForm } from 'vee-validate';
    import * as yup from 'yup';
    const mail = useMail();
    const { addToast } = useToast();
    const isFormHovered = ref(false);
    const { target: motionTarget } = useMotionVisibleOnce();

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

<style scoped>
    h2 {
        /* font-family: "Russo One", sans-serif; */
        font-family: "Righteous", sans-serif;
    }
</style>