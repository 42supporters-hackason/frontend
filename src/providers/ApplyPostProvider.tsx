import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

  export const ApplyUseLanguageContext = createContext<string | undefined>(undefined);
  export const SetApplyUseLanguageContext = createContext(
    {} as Dispatch<SetStateAction<string | undefined>>
  );
  export const ApplyUsernameContext = createContext<string | undefined>(undefined);
  export const SetApplyUsernameContext = createContext(
    {} as Dispatch<SetStateAction<string | undefined>>
  );
  export const ApplyKeywordContext = createContext<string | undefined>(undefined);
  export const SetApplyKeywordContext = createContext(
    {} as Dispatch<SetStateAction<string | undefined>>
  );
  export const ApplyStartDateContext = createContext<Date | undefined>(undefined);
  export const SetApplyStartDateContext = createContext(
    {} as Dispatch<SetStateAction<Date | undefined>>
  );
  export const ApplyEndDateContext = createContext<Date | undefined>(undefined);
  export const SetApplyEndDateContext = createContext(
    {} as Dispatch<SetStateAction<Date | undefined>>
  );

export const ApplyPostProvider = (props: { children: ReactNode }) => {
  const { children } = props;
  const [applyUseLanguage, setApplyUseLanguage] =
    useState<string | undefined>("");
  const [applyUsername, setApplyUsername] = useState<string | undefined>("");
  const [applyKeyword, setApplyKeyword] = useState<string | undefined>("");
  const [applyStartDate, setApplyStartDate] =
    useState<Date | undefined>(undefined);
  const [applyEndDate, setApplyEndDate] = useState<Date | undefined>(undefined);

  return (
  <>
    <ApplyUseLanguageContext.Provider value={applyUseLanguage} >
      <SetApplyUseLanguageContext.Provider value={setApplyUseLanguage}>
        <ApplyUsernameContext.Provider value={applyUsername}>
          <SetApplyUsernameContext.Provider value={setApplyUsername}>
            <ApplyKeywordContext.Provider value={applyKeyword}>
              <SetApplyKeywordContext.Provider value={setApplyKeyword}>
                <ApplyStartDateContext.Provider value={applyStartDate}>
                  <SetApplyStartDateContext.Provider value={setApplyStartDate}>
                    <ApplyEndDateContext.Provider value={applyEndDate}>
                      <SetApplyEndDateContext.Provider value={setApplyEndDate}>
                        {children}
                      </SetApplyEndDateContext.Provider>
                    </ApplyEndDateContext.Provider>
                  </SetApplyStartDateContext.Provider>
                </ApplyStartDateContext.Provider>
              </SetApplyKeywordContext.Provider>
            </ApplyKeywordContext.Provider>
          </SetApplyUsernameContext.Provider>
        </ApplyUsernameContext.Provider>
      </SetApplyUseLanguageContext.Provider>
    </ApplyUseLanguageContext.Provider>
  </>
  );
};
