import React, {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import constate from "constate";

export const [RecruteTitleProvider, useRecruteTitleContext, useSetRecruteTitleContext] = constate(() => {
  const [recruteTitle, setRecruteTitle] =
    useState<string | undefined>(undefined);
  return { recruteTitle, setRecruteTitle };
},
  value => value.recruteTitle,
  value => value.setRecruteTitle
);

export const [RecruteUseLanguageProvider, useRecruteUseLanguageContext, useSetRecruteUseLanguageContext] =
  constate(() => {
    const [recruteUseLanguage, setRecruteUseLanguage] =
      useState<string | undefined>(undefined);
    return { recruteUseLanguage, setRecruteUseLanguage };
  },
    value => value.recruteUseLanguage,
    value => value.setRecruteUseLanguage
  );

export const [RecruteDateProvider, useRecruteStartDateContext, useSetRecruteStartDateContext, useRecruteEndDateContext, useSetRecruteEndDateContext] = constate(() => {
	const [recruteStartDate, setRecruteStartDate] = useState<Date | null | undefined>(null)
	const [recruteEndDate, setRecruteEndDate] = useState<Date | null | undefined>(null)
	return { recruteStartDate, setRecruteStartDate, recruteEndDate, setRecruteEndDate }
},
  value => value.recruteStartDate,
  value => value.setRecruteStartDate,
  value => value.recruteEndDate,
  value => value.setRecruteEndDate,
)

export const RecrutePostProvider = (props: { children: ReactNode }) => {
  const { children } = props;

  return (
    <RecruteTitleProvider>
      <RecruteUseLanguageProvider>
				<RecruteDateProvider>
					{children}
				</RecruteDateProvider>
			</RecruteUseLanguageProvider>
    </RecruteTitleProvider>
  );
};
