"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Briefcase, Upload } from "lucide-react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { sendCareerMail, sendCareerMailToClient } from "@/helpers/sendmail"
import { send } from "process"
import { toast } from "sonner";

export default function Careers() {
  const [isOpen, setIsOpen] = useState(false)
  const [fileName, setFileName] = useState("")
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    email: "",
    department: "",
    designation: "",
    currentDesignation: "",
    currentCTC: "",
    expectedCTC: "",
    noticePeriod: "",
    state: "",
    city: "",
    experience: "",
  })

  const departments = [
    "After Sales Service / Maintenance",
    "Accounts",
    "Finance",
    "Human Resource",
    "Administration",
    "Information Technology",
    "Process Management",
    "Production",
    "Quality",
    "Research & Development",
    "Designing",
    "Project Execution",
    "Sales",
    "Marketing",
    "Public Relations",
    "Tender Management",
    "Supply Chain Management",
  ]

  const designations = [
    "General Manager",
    "Manager",
    "Asst. Manager",
    "Sr. Executive Manager",
    "Executive",
    "Data Operator",
    "Chief Officer",
    "Coordinator",
  ]

  const noticePeriods = ["Immediate Joining", "Within 15 Days", "30 Days", "90 Days"]

  const indianStates = [
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Delhi",
  ]

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const data = {
      name : formData.name,
      contact : formData.contact,
      email : formData.email,
      department : formData.department,
      designation : formData.designation,
      currentDesignation : formData.currentDesignation,
      currentCTC : formData.currentCTC,
      expectedCTC : formData.expectedCTC,
      noticePeriod : formData.noticePeriod,
      state : formData.state,
      city : formData.city,
      experience : formData.experience,
      resume : fileName,
    }
    sendCareerMail(data);
    sendCareerMailToClient(data);
    toast.success("Your career application has been sent successfully!")

    // const subject = encodeURIComponent("Career Application")
    // const body = encodeURIComponent(
    //   `Career Application\n\nName: ${formData.name}\nContact: ${formData.contact}\nEmail: ${formData.email}\nDepartment: ${formData.department}\nDesignation Applied For: ${formData.designation}\nCurrent Designation: ${formData.currentDesignation}\nCurrent CTC: ${formData.currentCTC}\nExpected CTC: ${formData.expectedCTC}\nNotice Period: ${formData.noticePeriod}\nState: ${formData.state}\nCity: ${formData.city}\nExperience & Motivation: ${formData.experience}\nResume: ${fileName}`,
    // )

    // Open email client with pre-filled data
    // window.location.href = `mailto:dmssolar@gmail.com?subject=${subject}&body=${body}`

    // Reset form after sending
    setFormData({
      name: "",
      contact: "",
      email: "",
      department: "",
      designation: "",
      currentDesignation: "",
      currentCTC: "",
      expectedCTC: "",
      noticePeriod: "",
      state: "",
      city: "",
      experience: "",
    })
    setFileName("")

    setIsOpen(false)
  }

  return (
    <>
      <section id="careers" className="py-20 md:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-linear-to-br from-accent/20 to-accent/10 rounded-xl p-12 border border-border">
            <Briefcase className="w-16 h-16 text-accent mx-auto mb-6" />

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Career With Us</h2>

            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Join a growing EPC company driving India's solar revolution. We're hiring engineers, technicians, and
              professionals passionate about sustainability and technology.
            </p>

            <Button className="cta-button" onClick={() => setIsOpen(true)}>
              Apply Now
            </Button>
          </div>
        </div>
      </section>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">Career Application</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-4">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name *</Label>
                <Input
                  id="name"
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact *</Label>
                <Input
                  id="contact"
                  type="tel"
                  required
                  placeholder="Enter your phone number"
                  value={formData.contact}
                  onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="Enter your email address"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            {/* Department and Designation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="department">Department *</Label>
                <Select
                  required
                  value={formData.department}
                  onValueChange={(value) => setFormData({ ...formData, department: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select department" />
                  </SelectTrigger>
                  <SelectContent>
                    {departments.map((dept) => (
                      <SelectItem key={dept} value={dept}>
                        {dept}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="designation">Designation Applied For *</Label>
                <Select
                  required
                  value={formData.designation}
                  onValueChange={(value) => setFormData({ ...formData, designation: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select designation" />
                  </SelectTrigger>
                  <SelectContent>
                    {designations.map((designation) => (
                      <SelectItem key={designation} value={designation}>
                        {designation}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentDesignation">Your Current Designation *</Label>
              <Input
                id="currentDesignation"
                required
                placeholder="Enter your current designation"
                value={formData.currentDesignation}
                onChange={(e) => setFormData({ ...formData, currentDesignation: e.target.value })}
              />
            </div>

            {/* CTC Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="currentCTC">Current CTC</Label>
                <Input
                  id="currentCTC"
                  placeholder="e.g., 5 LPA"
                  value={formData.currentCTC}
                  onChange={(e) => setFormData({ ...formData, currentCTC: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="expectedCTC">Expected CTC</Label>
                <Input
                  id="expectedCTC"
                  placeholder="e.g., 7 LPA"
                  value={formData.expectedCTC}
                  onChange={(e) => setFormData({ ...formData, expectedCTC: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="noticePeriod">Notice Period *</Label>
              <Select
                required
                value={formData.noticePeriod}
                onValueChange={(value) => setFormData({ ...formData, noticePeriod: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select notice period" />
                </SelectTrigger>
                <SelectContent>
                  {noticePeriods.map((period) => (
                    <SelectItem key={period} value={period}>
                      {period}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Location */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="state">Your State *</Label>
                <Select
                  required
                  value={formData.state}
                  onValueChange={(value) => setFormData({ ...formData, state: value })}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select state" />
                  </SelectTrigger>
                  <SelectContent>
                    {indianStates.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City *</Label>
                <Input
                  id="city"
                  required
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                />
              </div>
            </div>

            {/* Experience and Motivation */}
            <div className="space-y-2">
              <Label htmlFor="experience">
                Your relevant experience in the same field and why you wish to join DMS Solars & what is unique in DMS
                Solars as per you? *
              </Label>
              <Textarea
                id="experience"
                required
                placeholder="Share your experience and motivation..."
                rows={6}
                className="resize-none"
                value={formData.experience}
                onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
              />
            </div>

            {/* Resume Upload */}
            <div className="space-y-2">
              <Label htmlFor="resume">Resume Upload *</Label>
              <div className="flex items-center gap-4">
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  className="hidden"
                  required
                />
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => document.getElementById("resume")?.click()}
                  className="w-full"
                >
                  <Upload className="w-4 h-4 mr-2" />
                  {fileName || "Choose file (PDF, DOC, DOCX)"}
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex gap-4 pt-4">
              <Button type="button" variant="outline" onClick={() => setIsOpen(false)} className="flex-1">
                Cancel
              </Button>
              <Button type="submit" className="flex-1 cta-button">
                Submit Application
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  )
}
