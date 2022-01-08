import React, {
  ReactNode,
  useState,
  createContext,
  Dispatch,
  SetStateAction,
} from "react";
import constate from "constate";

export const [RecruteTitleProvider, useRecruteTitleContext] = constate(() => {
  const [recruteTitle, setRecruteTitle] =
    useState<string | undefined>(undefined);
  return { recruteTitle, setRecruteTitle };
});

export const [RecruteUseLanguageProvider, useRecruteUseLanguageContext] =
  constate(() => {
    const [recruteUseLanguage, setRecruteUseLanguage] =
      useState<string | undefined>(undefined);
    return { recruteUseLanguage, setRecruteUseLanguage };
  });

export const [RecruteDateProvider, useRecruteDateContext] = constate(() => {
	const [recruteStartDate, setRecruteStartDate] = useState<Date | null | undefined>(null)
	const [recruteEndDate, setRecruteEndDate] = useState<Date | null | undefined>(null)
	return { recruteStartDate, setRecruteStartDate, recruteEndDate, setRecruteEndDate }
})

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
