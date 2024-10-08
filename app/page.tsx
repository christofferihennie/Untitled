import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const { data: profile, error } = await supabase.from('user').select('id');


  console.log(profile)

  return (
    <div className="main">
      <h1>Untitled</h1>
    </div>
  );
}
