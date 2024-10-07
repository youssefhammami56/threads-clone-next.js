import { redirect } from 'next/navigation';
import { currentUser } from '@clerk/nextjs';
import { fetchUser } from '@/lib/actions/user.actions';
import PostThread from '@/components/forms/PostThread';

const page = async () => {
    const user = await currentUser();
    if (!user) return null;
  
    // fetch organization list created by user
    const userInfo = await fetchUser(user.id);
    if (!userInfo?.onboarded) redirect("/onboarding");
    if(!(userInfo?.status === 'active')) redirect('/activate-account');
  
    return (
      <>
        <h1 className='head-text'>Create Thread</h1>
  
        <PostThread userId={JSON.stringify(userInfo._id)} action="create" thread="null" />
      </>
    );
}

export default page