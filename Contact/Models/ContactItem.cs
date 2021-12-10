namespace Contact.Models
{
    public class ContactItem
    {
        /// <summary>
        /// Returns the UniqueIdentifier of the Contact
        /// </summary>
        public long Id { get; set; }
        /// <summary>
        /// Returns Contact First Name
        /// </summary>
        public string? FirstName { get; set; }

        /// <summary>
        /// Returns ContactSurname
        /// </summary>
        public string? Surname { get; set; }

        /// <summary>
        /// Returns the Email address of the Contact
        /// </summary>
        public string? EmailAddress { get; set; }

        /// <summary>
        /// Returns the Cellphone Number
        /// </summary>
        public string? CellPhoneNo { get; set; }

        /// <summary>
        /// Returns the Company Name of the Contact
        /// </summary>
        public string? CompanyName { get; set; }

        /// <summary>
        /// Update creation date on the creation of the Contact
        /// </summary>
        public DateTime CreationDate { get; set; }

        /// <summary>
        /// Update on the Update or edit of the Contact 
        /// </summary>
        public DateTime LastUpdatedDate { get; set; }

    }
}
