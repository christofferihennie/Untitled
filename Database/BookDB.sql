BEGIN;

DROP TABLE IF EXISTS public.USER CASCADE;
DROP TABLE IF EXISTS public.BOOK CASCADE;
DROP TABLE IF EXISTS public.book_genre CASCADE;
DROP TABLE IF EXISTS public.series CASCADE;
DROP TABLE IF EXISTS public.series_ENTRY CASCADE;
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

CREATE TABLE public.user(
    User_ID uuid not null references auth.users on delete cascade,
    Firstname text,
    Lastname text,
    Higest_Streak int,
    Current_Streak int,

    PRIMARY KEY (ID)
);
ALTER TABLE public.user enable row level SECURITY;

CREATE TABLE public.book(
    ID serial PRIMARY KEY,
    Original_title text
);
ALTER TABLE public.book enable row level SECURITY;

CREATE TABLE public.book_genre(
    Book_ID int REFERENCES public.book (ID),
    genre text,

    PRIMARY KEY (Book_ID, genre)
);
ALTER TABLE public.book_genre enable row level SECURITY;

CREATE TABLE public.series(
    Name text PRIMARY KEY
);
ALTER TABLE public.series enable row level SECURITY;

CREATE TABLE public.series_entry(
    Book_ID int REFERENCES public.book (ID),
    Series_Name text REFERENCES public.Series (Name),
    Number int,

    PRIMARY KEY (Book_ID, Series_Name)
);
ALTER TABLE public.series_entry enable row level SECURITY;

CREATE TABLE public.publisher(
    Name text PRIMARY KEY
);
ALTER TABLE public.publisher enable row level SECURITY;

CREATE TABLE public.edition(
    ISBN int PRIMARY KEY,
    Title text,
    Year int,
    Pages int,
    Cover_URL text,
    Format text,
    Publisher text REFERENCES public.publisher(name),
    Book_ID int REFERENCES public.book(ID)
);
ALTER TABLE public.edition enable row level SECURITY;

CREATE TABLE public.list(
    User_ID uuid not null references auth.users on delete cascade,
    List_Name text,

    PRIMARY KEY (User_ID, List_Name)
);
ALTER TABLE public.list enable row level SECURITY;

CREATE TABLE public.list_entry(
    User_ID uuid not null references auth.users on delete cascade,
    List_Name text,
    Book_ID int REFERENCES public.book(ID),

    PRIMARY KEY (User_ID, List_Name, Book_ID)
);
ALTER TABLE public.list_entry enable row level SECURITY;

CREATE TABLE public.review(
    User_ID not null references auth.users on delete cascade,
    Book_ID int REFERENCES public.book(ID),
    Rating int CHECK (Rating >= 0 AND rating <= 6),
    Text_Review text,

    PRIMARY KEY (User_ID, Book_ID)
);
ALTER TABLE public.review enable row level SECURITY;

CREATE TABLE public.read(
    User_ID not null references auth.users on delete cascade,
    ISBN int REFERENCES public.edition(ISBN),
    Start_Date date,
    End_Date date,
    Status text,

    PRIMARY KEY (ISBN, User_ID, Start_Date)
);
ALTER TABLE public.read enable row level SECURITY;

CREATE TABLE public.journal(
    User_ID not null references auth.users on delete cascade,
    ISBN INT REFERENCES public.edition(ISBN),
    Date timestamp DEFAULT now(),
    From_Page int,
    To_Page int CHECK (To_Page > From_Page),

    PRIMARY KEY (User_ID, ISBN, Date)
);
ALTER TABLE public.journal enable row level SECURITY;

CREATE TABLE public.contributor(
    ID serial PRIMARY KEY,
    Firstname text,
    Lastname text
);

CREATE TABLE public.AUTHOR(
    Book_ID int REFERENCES public.book(ID),
    Author_ID int REFERENCES public.contributor(ID),

    PRIMARY KEY (Author_ID, Book_ID)
);

CREATE TABLE public.translator(
    ISBN int REFERENCES public.edition(ISBN),
    Translator_ID int REFERENCES public.contributor(ID),
    Language text,

    PRIMARY KEY (Translator_ID, ISBN)
);

COMMIT;
