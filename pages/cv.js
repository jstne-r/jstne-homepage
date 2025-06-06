import dynamic from 'next/dynamic';
import Main from '../components/layouts/main';


const CVApp = dynamic(() => import('../external/cv/src/app/page'), {
    ssr: false,
    });


export default function CVPage() {
    return (
    <Main title="CV">
      <CVApp />
    </Main>
  );
}