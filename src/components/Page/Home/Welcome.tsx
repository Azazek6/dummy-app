import { useUserStore } from "@/store/user.store";

const Welcome = () => {
  const { profile } = useUserStore();

  return (
    <section className="font-semibold tracking-wide text-lg md:text-2xl xl:text-3xl text-center mb-4">
      <h3>Bienvenido, {profile ? profile.name : "Usuario"}</h3>
    </section>
  );
};

export default Welcome;
