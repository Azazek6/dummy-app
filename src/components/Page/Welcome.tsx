import { useUserStore } from "@/store/user.store";

const Welcome = () => {
  const { profile } = useUserStore();

  return (
    <section className="font-semibold tracking-wide text-lg text-center">
      <h3>Bienvenido, {profile ? profile.name : "Usuario"}</h3>
    </section>
  );
};

export default Welcome;
