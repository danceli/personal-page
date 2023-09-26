import { useEffect } from "react"
import { $global } from "../subjects/global"
import { filter, tap } from "rxjs"

type CALL_BACK = (payload: unknown, options: any) => void;

export const useGlobalSubject = (pipName: string, callback: CALL_BACK, deps: any) => {
  useEffect(() => {
    $global
      .pipe(
        filter((data) => data.action === pipName),
        tap((data) => {
          callback(data.payload, data.options)
        })
      )
      .subscribe();
  }, [deps])
}
