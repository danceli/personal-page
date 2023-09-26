import { useGlobalSubject } from "@hooks/useSubject";

const useApplication = () => {

  const handleInitProject = (payload: any) => {
    console.log(payload, 'payload')
  }
  useGlobalSubject('project/initProject', handleInitProject, [])
}

export default useApplication;