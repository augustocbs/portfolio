"use client";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { ControlledInput } from "@/components/controlled/controlled-input";

const formSchema = z.object({
  fullname: z
    .string()
    .min(3, "Estranho, seu nome é beeeem curto. Tente seu nome completo")
    .max(
      50,
      "Uau, seu nome é bem grande. Nesse caso, me passe só uma parte dele."
    ),
  email: z.string().email("Seu email não é válido, verifique-o 🤖"),
  message: z
    .string()
    .min(10, "A mensagem está muito curta... Por favor, me conte mais 😉")
    .max(
      500,
      "A mensagem está bem grande. Obrigado mas, vou precisar que diminua ela um pouco XP"
    ),
});

type FormData = z.infer<typeof formSchema>;

const ContactForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onChange",
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    // try {
    //   const formData = new FormData();
    //   formData.append("fullname", data.fullname);
    //   formData.append("email", data.email);
    //   formData.append("message", data.message);

    //   const response = await sendMessageServerAction(formData);

    //   if (response.success) {
    //     toast.success(response.success);
    //     reset();
    //   } else {
    //     toast.error(response.error);
    //   }
    // } catch (error) {
    //   toast.error("Erro ao enviar a mensagem. Tente novamente.");
    // }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <ControlledInput
        name="fullname"
        control={control}
        label="Nome"
        placeholder="Seu nome"
        error={errors.fullname?.message}
      />
      <ControlledInput
        name="email"
        control={control}
        label="E-mail"
        placeholder="Seu e-mail"
        type="email"
        error={errors.email?.message}
      />
      <div className="space-y-2">
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          placeholder="Sua mensagem"
          {...control.register("message")}
        />
        {errors.message && (
          <span className="text-sm text-red-500">{errors.message.message}</span>
        )}
      </div>
      <div className="space-y-4">
        <Button
          type="submit"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="default"
          disabled={isSubmitting}
        >
          {isSubmitting
            ? "Transportando sua mensagem para minha caixa de entrada... 📨"
            : "Enviar"}
        </Button>
        <Button
          type="reset"
          className="w-full px-8 py-6 cursor-pointer"
          size="lg"
          variant="outline"
          onClick={() => reset()}
        >
          Resetar
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
