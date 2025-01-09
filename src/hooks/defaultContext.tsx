'use client';

import React, { createContext, useContext } from 'react';

type DefaultContext<T> = {
	context: React.Context<T>;
	defaultValue: T;
	Provider: React.FC<{ children: React.ReactNode; value?: T }>;
	Consumer: React.FC<{ children: (value: T) => React.ReactNode }>;
};

const createDefaultContext = <T,>(defaultValue: T) => {
	const context = createContext<T>(defaultValue);

	const contextElement = {
		context: context,
		defaultValue: defaultValue,
		Provider: ({
			children,
			value,
		}: {
			children: React.ReactNode;
			value?: T;
		}) => (
			<context.Provider value={value || defaultValue}>
				{children}
			</context.Provider>
		),
		Consumer: ({ children }: { children: (value: T) => React.ReactNode }) => (
			<context.Consumer>{children}</context.Consumer>
		),
	};

	return contextElement;
};

const useDefaultContext = <T,>(context: DefaultContext<T>) => {
	return useContext(context.context);
};

export { createDefaultContext, useDefaultContext };
