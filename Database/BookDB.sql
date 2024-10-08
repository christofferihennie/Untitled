BEGIN;

DROP TABLE IF EXISTS public.USER CASCADE;
DROP TABLE IF EXISTS public.BOOK CASCADE;
DROP TABLE IF EXISTS public.BOOK_GENRE CASCADE;
DROP TABLE IF EXISTS public.SERIES CASCADE;
DROP TABLE IF EXISTS public.SERIES_ENTRY CASCADE;
DROP TABLE IF EXISTS public.PUBLISHER CASCADE;
DROP TABLE IF EXISTS public.EDITION CASCADE;
DROP TABLE IF EXISTS public.LIST CASCADE;
DROP TABLE IF EXISTS public.LIST_ENTRY CASCADE;
DROP TABLE IF EXISTS public.REVIEW CASCADE;
DROP TABLE IF EXISTS public.READ CASCADE;
DROP TABLE IF EXISTS public.JOURNAL CASCADE;
DROP TABLE IF EXISTS public.CONTRIBUTOR CASCADE;
DROP TABLE IF EXISTS public.AUTHOR CASCADE;
DROP TABLE IF EXISTS public.TRANSLATOR CASCADE;

CREATE TABLE public.USER(
    User_ID uuid not null references auth.users on delete cascade,
    Firstname text,
    Lastname text,
    Higest_Streak int,
    Current_Streak int,

    PRIMARY KEY (ID)
);
ALTER TABLE public.USER enable row level SECURITY;

CREATE TABLE public.BOOK(
    ID serial PRIMARY KEY,
    Original_title text
);
ALTER TABLE public.BOOK enable row level SECURITY;

CREATE TABLE public.BOOK_GENRE(
    Book_ID int REFERENCES public.BOOK (ID),
    genre text,

    PRIMARY KEY (Book_ID, genre)
);
ALTER TABLE public.BOOK_GENRE enable row level SECURITY;

CREATE TABLE public.SERIES(
    Name text PRIMARY KEY
);
ALTER TABLE public.SERIES enable row level SECURITY;

CREATE TABLE public.SERIES_ENTRY(
    Book_ID int REFERENCES public.BOOK (ID),
    Series_Name text REFERENCES public.SERIES (Name),
    Number int,

    PRIMARY KEY (Book_ID, Series_Name)
);
ALTER TABLE public.SERIES_ENTRY enable row level SECURITY;

CREATE TABLE public.PUBLISHER(
    Name text PRIMARY KEY
);
ALTER TABLE public.PUBLISHER enable row level SECURITY;

CREATE TABLE public.EDITION(
    ISBN int PRIMARY KEY,
    Title text,
    Year int,
    Pages int,
    Cover_URL text,
    Format text,
    Publisher text REFERENCES public.PUBLISHER(name),
    Book_ID int REFERENCES public.BOOK(ID)
);
ALTER TABLE public.EDITION enable row level SECURITY;

CREATE TABLE public.LIST(
    User_ID uuid not null references auth.users on delete cascade,
    List_Name text,

    PRIMARY KEY (User_ID, List_Name)
);
ALTER TABLE public.LIST enable row level SECURITY;

CREATE TABLE public.LIST_ENTRY(
    User_ID uuid not null references auth.users on delete cascade,
    List_Name text,
    Book_ID int REFERENCES public.BOOK(ID),

    PRIMARY KEY (User_ID, List_Name, Book_ID)
);
ALTER TABLE public.LIST_ENTRY enable row level SECURITY;

CREATE TABLE public.REVIEW(
    User_ID not null references auth.users on delete cascade,
    Book_ID int REFERENCES public.BOOK(ID),
    Rating int CHECK (Rating >= 0 AND rating <= 6),
    Text_Review text,

    PRIMARY KEY (User_ID, Book_ID)
);
ALTER TABLE public.REVIEW enable row level SECURITY;

CREATE TABLE public.READ(
    User_ID not null references auth.users on delete cascade,
    ISBN int REFERENCES public.EDITION(ISBN),
    Start_Date date,
    End_Date date,
    Status text,

    PRIMARY KEY (ISBN, User_ID, Start_Date)
);
ALTER TABLE public.READ enable row level SECURITY;

CREATE TABLE public.JOURNAL(
    User_ID not null references auth.users on delete cascade,
    ISBN INT REFERENCES public.EDITION(ISBN),
    Date timestamp DEFAULT now(),
    From_Page int,
    To_Page int CHECK (To_Page > From_Page),

    PRIMARY KEY (User_ID, ISBN, Date)
);
ALTER TABLE public.JOURNAL enable row level SECURITY;

CREATE TABLE public.CONTRIBUTOR(
    ID serial PRIMARY KEY,
    Firstname text,
    Lastname text
);

CREATE TABLE public.AUTHOR(
    Book_ID int REFERENCES public.BOOK(ID),
    Author_ID int REFERENCES public.CONTRIBUTOR(ID),

    PRIMARY KEY (Author_ID, Book_ID)
);

CREATE TABLE public.TRANSLATOR(
    ISBN int REFERENCES public.EDITION(ISBN),
    Translator_ID int REFERENCES public.CONTRIBUTOR(ID),
    Language text,

    PRIMARY KEY (Translator_ID, ISBN)
);

COMMIT;
