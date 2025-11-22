import { createClient } from '@/utils/supabase/server';

export default async function test() {
  const supabase = await createClient();
  const { data: instruments } = await supabase.from("TestData").select();

  return <pre>{JSON.stringify(instruments, null, 2)}</pre>
}