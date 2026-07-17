export interface Company {
  name: string;
  slogan: string;
  description: string;

  address: string;
  city: string;
  country: string;

  emails: string[];
  phones: string[];

  schedule: {
    weekdays: {
      days: string;
      morning: string;
      afternoon: string;
    };

    saturday: {
      days: string;
      morning: string;
    };
  };

  catalog: string;

  stats: {
    projects: string;
    precision: string;
    support: string;
  };

  social: {
    facebook: string;
    instagram: string;
    linkedin: string;
    whatsapp: string;
  };
}