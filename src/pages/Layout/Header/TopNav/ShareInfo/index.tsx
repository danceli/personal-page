import { ShareInfoWrap } from "../../style";
import { ReactComponent as GithubSvg } from '@/assets/icons/github.svg';
import { ReactComponent as EmailSvg } from '@/assets/icons/email.svg';

const shareList = [
  {
    type: 'github',
    element: <GithubSvg className="share-icon" />,
    path: 'https://github.com/danceli'
  },
  {
    type: 'email',
    element: <EmailSvg className="share-icon" />,
    path: 'dancelixxx@gmail.com'
  }
]

const ShareInfo = () => {

  const goShare = (share) => {
    if (share?.type === 'github') {
      window.open(share?.path);
    } else if (share?.type === 'email') {
      window.location.href = `mailto:${share?.path}?subject=Email%20Subject&body=Email%20Body`
    }
  }

  return (
    <div className={ShareInfoWrap}>
      {
        shareList.map(item => (
          <span className="share-item" onClick={() => goShare(item)}>
            {item?.element}
          </span>
        ))
      }
    </div>
  )
}

export default ShareInfo;