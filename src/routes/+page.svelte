<script lang="ts">
  import Form from '../components/Form.svelte';
  import SubmitButton from '../components/SubmitButton.svelte';
  import FormCheckbox from '../components/FormCheckbox.svelte';
  import { formSchema } from '../lib/validation-schemas/form-schema';
  import Input from '../components/Input.svelte';
  import TextArea from '../components/TextArea.svelte';
  import Toast from '../components/Toast.svelte';

  let name: string = '';
  let company: string = '';
  let email: string = '';
  let phone: string = '';
  let subject: string = '';
  let message: string = '';
  let terms: boolean = false;

  let activateToast: boolean = false;

  let errors: Record<string, string> = {};

  const handleSubmit = (event: Event) => {
    event.preventDefault();
    errors = {};
    const result = formSchema.safeParse({
      name,
      company,
      email,
      phone,
      subject,
      message,
      terms,
    });
    if (!result.success) {
      result.error.errors.forEach(
        (error) => (errors[error.path[0]] = error.message)
      );
      return;
    }
	console.log(result.data);
    activateToast = true;
    setTimeout(() => {
      activateToast = false;
    }, 2000);
  };
</script>

<svelte:head>
  <title>InnovationDigital</title>
  <meta
    name="Innovation digital"
    content="Innovation digital test project."
  />
</svelte:head>

<div>
  <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
    <div class="flex flex-col items-center gap-7">
      <h2 class="text-[55px] font-medium text-white">Hello</h2>
      <Form onSubmit={handleSubmit}>
        <Input
          id="name"
          label="Name"
          bind:value={name}
          error={errors.name}
          required={true}
        />
        <Input
          id="company"
          label="Company"
          bind:value={company}
          error={errors.company}
          required={true}
        />
        <Input
          id="email"
          label="Email"
          bind:value={email}
          error={errors.email}
          required={true}
        />
        <Input
          id="phone"
          label="Phone"
          bind:value={phone}
          error={errors.phone}
          required={true}
        />
        <Input
          id="subject"
          label="Subject"
          bind:value={subject}
          error={errors.subject}
          required={true}
        />
        <TextArea
          id="message"
          label="Message"
          bind:value={message}
          error={errors.message}
          required={true}
        />
        <FormCheckbox bind:checked={terms} error={errors.terms} />
        <SubmitButton type="submit" />
      </Form>
    </div>
  </section>
  <Toast activate={activateToast} text="Данные успешно отправлены!" />
</div>
